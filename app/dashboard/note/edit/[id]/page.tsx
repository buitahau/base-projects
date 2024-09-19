'use client';

import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Note } from '@/types/note';
import { getNoteById } from '@/api/note-api';

export default function EditNote({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const colorValue = searchParams.get('color') ?? 'red';
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const fetchNode = async () => {
      if (params.id) {
        let note = await getNoteById(params.id);
        console.log(note);
      }
    };

    fetchNode();
  }, [params.id]);

  return (
    <>
      <Breadcrumb pageName="Notes" />
      <h3>
        Edit note with {note && note.id} and color {colorValue}
      </h3>
    </>
  );
}
