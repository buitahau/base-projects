'use client';

import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import EditSkill from '@/components/ui/dashboard/Skill/EditSkill';
import ListSkills from '@/components/ui/dashboard/Skill/ListSkills';
import { Skill } from '@/types/skill';
import { useState } from 'react';

export default function SkillManager({}) {
  const [listMode, setListMode] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleEditSkill = (skill: Skill) => {
    setListMode(false);
    setEditMode(true);
    setSelectedSkill(skill);
  };

  return (
    <>
      <Breadcrumb pageName="Skill" pageUrl="/dashboard/skill" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            {listMode && <ListSkills onSkillClick={handleEditSkill} />}
            {editMode && <EditSkill skill={selectedSkill as Skill} />}
          </div>
        </div>
      </div>
    </>
  );
}
