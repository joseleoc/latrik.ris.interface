import { Link } from "react-router-dom";
import { ReactComponent as AddPersonSvg } from "assets/icons/AddPerson.svg";
import { ReactComponent as ListCheckSvg } from "assets/icons/ListCheck.svg";
import {ReactComponent as PeopleSvg } from "assets/icons/People.svg"
import {ReactComponent as SettingsSvg} from "assets/icons/Settings.svg";
import {ReactComponent as StatsSvg} from "assets/icons/Stats.svg";

export function SecretaryHome() {
  return (
    <div>
      <div className="bg-primary w-full h-1/3 -z-10 fixed top-0">
        {/* background azul oscuro */}
      </div>

      <div className="w-full">
        <div className="mb-5">
          <p className="text-center text-5xl text-white font-extrabold block">
            Bienvenido de nuevo!
          </p>
        </div>

        <div className="flex justify-evenly mx-28 border-b pb-14">
          <Link to="/PatientList">
            <button
              className="filledSecondary p-8 m-4 md:px-24 md:py-20 text-center rounded-3xl"
              type="button"
              title="Crear Nuevo Eestudio"
            >
              <PeopleSvg className="svg195 fill-primary" />
            </button>
            <br />
            <h3 className="text-center text-2xl font-bold mt-9">
              Lista de pacientes
            </h3>
          </Link>
          <div>
            <Link to="/StudyList">
              <button
                className="filledSecondary p-8 m-4 md:px-24 md:py-20 text-center rounded-3xl"
                type="button"
                title="Lista de Estudios"
              >
                <ListCheckSvg className="svg195 fill-primary" />
              </button>
              <h3 className="text-center text-2xl font-bold mt-9">
                Lista de Estudios
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="my-5">
          <p className="text-center text-4xl font-bold block">
            Accesos rápidos
          </p>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly">
          <button
            className="filledPrimary py-4 px-8  mx-4 my-2 rounded-3xl max-w-[230px]"
            type="button"
            title="Configuración"
          >
            <SettingsSvg className="svg120 fill-white" />
            Configuración
          </button>
          <Link to={"/StudyForm"}>
          <button
            className="filledPrimary py-4 px-8  mx-4 my-2 rounded-3xl max-w-[230px]"
            type="button"
            title="Pacientes"
          >
            <AddPersonSvg className="svg120 fill-white" />            
            Nuevo estudio
          </button>
          </Link>
          <button
            className="filledPrimary py-4 px-8  mx-4 my-2 rounded-3xl max-w-[230px]"
            type="button"
            title="Estadísticas"
          >
            <StatsSvg className="svg120 fill-white" />
            Estadísticas
          </button>
        </div>
      </div>
    </div>
  );
}
