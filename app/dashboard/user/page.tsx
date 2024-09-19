import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import ListUsers from '@/components/ui/dashboard/User/ListUser';

export default function UserIndex() {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <ListUsers />
      </div>
    </>
  );
}
