import os
import openai
import json
import re

class BlogGenerator:
    def __init__(self, api_key: str = None, model: str = "o1-mini"):
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            raise ValueError("OpenAI API key is not set.")
        openai.api_key = self.api_key
        self.model = model

    def clean_json_string(self, raw_content: str) -> str:
        """
        Clean raw JSON-like text that may have unescaped line breaks in string values.
        Converts it into valid JSON format.
        """
        # Remove Markdown code block markers if present
        raw_content = raw_content.strip()
        if raw_content.startswith("```"):
            raw_content = re.sub(r"^```(json)?", "", raw_content)
            raw_content = re.sub(r"```$", "", raw_content)
            raw_content = raw_content.strip()

        # Replace unescaped line breaks inside string values with literal \n
        # This is a naive but effective method assuming JSON keys are double-quoted
        def replace_linebreaks_in_strings(match):
            content = match.group(1)
            content = content.replace('\n', '\\n')
            return f'"{content}"'

        json_string = re.sub(
            r'"(.*?)"',
            replace_linebreaks_in_strings,
            raw_content,
            flags=re.DOTALL
        )

        return json_string

    def generate(self, subject: str, raw_contents: str) -> str:
        """
        Generate a Markdown-formatted blog post from the given subject and raw content.
        """
        prompt = f"""
You are a professional blog writer.

Task:
- Analyze the raw contents and understand their meaning.
- Summarize and reorganize the information logically.
- Describe each raw content item in detail.
- Rewrite the content in a professional blog style, with a friendly and informative tone.
- Ensure the post has a clear structure: an engaging introduction, well-organized body, and a thoughtful conclusion.
- Highlight key insights or takeaways.
- Format the output as Markdown using:
  - # for the main title
  - ## for subheadings
  - Bullet points, numbered lists, blockquotes where helpful
  - **bold**, *italic*, or inline code where appropriate
- Return only raw JSON. Do not include markdown formatting or explanations.

Output:
- Return the result as a JSON object with two fields:
  - "description": A concise summary of the blog (about 100-150 words). This should capture the key message and purpose of the blog.
  - "markdown_content": The full blog post written in Markdown format. 
    - Use # for the main title.
    - Use ## for subheadings (including one per key point if suitable).
    - Use bullet points, numbered lists, blockquotes where helpful.
    - Use **bold**, *italic*, or inline code formatting where needed.

Input:
- Subject: {subject}
- Raw Contents:
  {raw_contents}
"""

        response = openai.ChatCompletion.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=1,
            max_completion_tokens=10000
        )

        content = response['choices'][0]['message']['content']

        # Remove ```json or ``` and ``` at the start/end if present
        if content.startswith('```'):
            content = content.strip('```').strip()
            if content.startswith('json'):
                content = content[len('json'):].strip()

        json_string = self.clean_json_string(content)

        try:
            result = json.loads(json_string)
        except json.JSONDecodeError:
            raise ValueError("Failed to parse JSON from response:\n" + content)

        return result