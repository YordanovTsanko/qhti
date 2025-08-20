import React from "react";
import Container from "../../components/Container";
import { tempoNotes } from "../../utils/tempoData";
import NotesCard from "../../components/Profile/NotesCard";

const MyNotebook = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-2 lg:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          МОЯТ БЕЛЕЖНИК
        </h2>
        <div className="mb-8 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <div className="flex flex-col gap-4 w-full mb-8">
          {tempoNotes ? (
            tempoNotes.map((note) => <NotesCard note={note} />)
          ) : (
            <h2 className="text-center text-white text-sm font-sans ">
              ВСЕ ОЩЕ НЯМАТЕ ЗАПАЗЕНИ ТЪРСЕНИЯ В БЕЛЕЖНИКА
            </h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MyNotebook;
