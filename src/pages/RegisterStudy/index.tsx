import { Patient, Study } from "models/latrikModels";

import React from "react";
import { BackButton } from "components/BackButton";
import Loader from "components/Loader";
import StudyConfirmationModal from "./StudyConfirmationModal";
import StudyForm from "./StudyForm";
import StudyPatientForm from "./StudyPatientForm";
import { addStudy } from "api/studiesApi";

function RegisterStudy() {
  // const { state } = useLocation();
  // const { patientId } = state;

  const [patient, setPatient] = React.useState<Patient>();
  const [study, setStudy] = React.useState<Study>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] =
    React.useState<boolean>(true);

  const createStudy = () => {
    if (study) {
      addStudy(study).then(
        (res) => {
          console.log("res: ", res);
          setStudy(res.data);
          setShowConfirmationModal(false);
        },
        (err) => {
          console.log("err: ", err);
        }
      );
    } else {
      console.log("No hay estudio");
    }
  };
  // React.useEffect(() => {
  //   if (patientId) {
  //     getPatientById(patientId).then(
  //       (res) => {
  //         console.log("patientRes: ", res);
  //         setPatient(res.data);
  //       },
  //       (err) => {
  //         console.log("patientErr: ", err);
  //       }
  //     );
  //   }
  // }, [patientId]);

  return (
    <>
      <BackButton goTo={"/StudyList"} />

      <div className="border-4 border-primary bg-white w-2/3 rounded-[40px] m-auto px-20 py-5">
        <h1 className="text-center text-black text-4xl font-bold mb-5">
          Registro de estudio
        </h1>
        <StudyPatientForm
          patient={patient}
          setPatient={setPatient}
          setIsLoading={setIsLoading}
        />
        <StudyForm
          patient={patient}
          setStudy={setStudy}
          setShowConfirmationModal={setShowConfirmationModal}
        />
      </div>

      {showConfirmationModal && (
        <StudyConfirmationModal
          setShowConfirmationModal={setShowConfirmationModal}
          createStudy={createStudy}
        />
      )}
      <Loader isLoading={isLoading} />
    </>
  );
}

export default RegisterStudy;
