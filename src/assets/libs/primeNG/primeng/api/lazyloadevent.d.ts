import { SortMeta } from './sortmeta';
import { FilterMetadata } from './filtermetadata';
export interface LazyLoadEvent {
    first?: number;
    last?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: {
        [s: string]: FilterMetadata;
    };
    globalFilter?: any;
    forceUpdate?: () => void;
}
