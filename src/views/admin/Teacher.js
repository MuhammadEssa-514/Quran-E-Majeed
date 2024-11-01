import TeacherData from "components/Teacher/TeacherData";



export default function Teacher() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <TeacherData />
          </div>
        </div>
      </div>
    </>
  );
}
