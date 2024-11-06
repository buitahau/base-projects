import { Skill } from '@/types/skill';
import { createClient } from '@/utils/supabase/client';

const SKILL_TABLE = 'skill';

export const getAllSkills = async (): Promise<Skill[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(SKILL_TABLE)
    .select('*')
    .returns<Skill[]>();
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

export const updateSkill = async (
  skill: Skill
): Promise<{ data: any; error: any }> => {
  console.log(skill);
  const supabase = createClient();
  const { id, ...body } = skill;
  return await supabase.from(SKILL_TABLE).update(body).eq('id', id);
};
