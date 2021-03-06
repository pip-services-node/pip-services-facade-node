import { IReferences } from 'pip-services-commons-node';
import { FacadeOperations } from './FacadeOperations';
export declare class AboutOperations extends FacadeOperations {
    private _contextInfo;
    setReferences(references: IReferences): void;
    getAboutOperation(): (req: any, res: any) => void;
    private getNetworkAddresses;
    private getAbout;
}
