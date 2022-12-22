import { PipeName } from "@common/pipes";

export interface ListColumnDetails {
    header: string,
    key: string,
    main?: boolean,
    pipe?: PipeName,
    sortable: boolean
}