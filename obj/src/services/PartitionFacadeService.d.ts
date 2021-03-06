import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { IFacadeService } from './IFacadeService';
import { FacadeService } from './FacadeService';
export declare class PartitionFacadeService extends FacadeService {
    protected _parent: IFacadeService;
    constructor();
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getRootPath(): string;
    protected register(): void;
}
