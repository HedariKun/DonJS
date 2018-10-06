import IApplication from "../Interfaces/iapplication";
import { Appllication } from "../Objects/applicationObject";

export default function applicationParser(obj : any) : IApplication {
    let application : IApplication = new Appllication();
    application.name = obj.name;
    application.webiste = obj.website;
    return application;
}