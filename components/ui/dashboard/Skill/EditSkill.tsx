import { updateSkill } from '@/api/skill-api';
import { Skill } from '@/types/skill';
import { showToastError, showToastSuccess } from '@/utils/toast-helpers';
import React, { Component, ReactNode } from 'react';

interface EditSkillProps {
  skill?: Skill;
}

interface EditSkillState {
  id: string;
  name: string;
  icon: string;
}

class EditSkill extends Component<EditSkillProps, EditSkillState> {
  constructor(props: EditSkillProps) {
    super(props);
    if (props.skill) {
      const skill = props.skill;
      this.state = {
        id: skill.id,
        name: skill.name,
        icon: skill.icon
      };
    }
  }
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await updateSkill(this.state);
    if (error) {
      showToastError('Error when updating skill!');
    } else {
      showToastSuccess('Update successful!');
    }
  };
  handleChange = (e: React.ChangeEvent<{ name: string; value: any }>) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  render(): ReactNode {
    const { id, name, icon } = this.state;
    return (
      <>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              {id ? 'Edit' : 'Add'} Skill
            </h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Icon
                  </label>
                  <input
                    type="text"
                    placeholder="Enter icon"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    name="icon"
                    id="icon"
                    value={icon}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center space-x-4">
                <button
                  className="rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="rounded bg-secondary p-3 font-medium text-gray hover:bg-opacity-90"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditSkill;
