import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterMatchMode } from './filtermatchmode';
import * as i0 from "@angular/core";
export class PrimeNGConfig {
    constructor() {
        this.ripple = false;
        this.overlayOptions = {};
        this.filterMatchModeOptions = {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
        };
        this.translation = {
            startsWith: 'Starts with',
            contains: 'Contains',
            notContains: 'Not contains',
            endsWith: 'Ends with',
            equals: 'Equals',
            notEquals: 'Not equals',
            noFilter: 'No Filter',
            lt: 'Less than',
            lte: 'Less than or equal to',
            gt: 'Greater than',
            gte: 'Greater than or equal to',
            is: 'Is',
            isNot: 'Is not',
            before: 'Before',
            after: 'After',
            dateIs: 'Date is',
            dateIsNot: 'Date is not',
            dateBefore: 'Date is before',
            dateAfter: 'Date is after',
            clear: 'Clear',
            apply: 'Apply',
            matchAll: 'Match All',
            matchAny: 'Match Any',
            addRule: 'Add Rule',
            removeRule: 'Remove Rule',
            accept: 'Yes',
            reject: 'No',
            choose: 'Choose',
            upload: 'Upload',
            cancel: 'Cancel',
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dateFormat: 'mm/dd/yy',
            firstDayOfWeek: 0,
            today: 'Today',
            weekHeader: 'Wk',
            weak: 'Weak',
            medium: 'Medium',
            strong: 'Strong',
            passwordPrompt: 'Enter a password',
            emptyMessage: 'No results found',
            emptyFilterMessage: 'No results found'
        };
        this.zIndex = {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100
        };
        this.translationSource = new Subject();
        this.translationObserver = this.translationSource.asObservable();
    }
    getTranslation(key) {
        return this.translation[key];
    }
    setTranslation(value) {
        this.translation = { ...this.translation, ...value };
        this.translationSource.next(this.translation);
    }
}
PrimeNGConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: PrimeNGConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrimeNGConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: PrimeNGConfig, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: PrimeNGConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWVuZ2NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvcHJpbWVuZ2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUtwRCxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUVJLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRXBDLDJCQUFzQixHQUFHO1lBQ3JCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQzFLLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztZQUN2TSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDO1NBQ3hILENBQUM7UUFFTSxnQkFBVyxHQUFnQjtZQUMvQixVQUFVLEVBQUUsYUFBYTtZQUN6QixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsY0FBYztZQUMzQixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsUUFBUTtZQUNoQixTQUFTLEVBQUUs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QkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaWx0ZXJNYXRjaE1vZGUgfSBmcm9tICcuL2ZpbHRlcm1hdGNobW9kZSc7XG5pbXBvcnQgeyBPdmVybGF5T3B0aW9ucyB9IGZyb20gJy4vb3ZlcmxheW9wdGlvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuL3RyYW5zbGF0aW9uJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcmltZU5HQ29uZmlnIHtcbiAgICByaXBwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG92ZXJsYXlPcHRpb25zOiBPdmVybGF5T3B0aW9ucyA9IHt9O1xuXG4gICAgZmlsdGVyTWF0Y2hNb2RlT3B0aW9ucyA9IHtcbiAgICAgICAgdGV4dDogW0ZpbHRlck1hdGNoTW9kZS5TVEFSVFNfV0lUSCwgRmlsdGVyTWF0Y2hNb2RlLkNPTlRBSU5TLCBGaWx0ZXJNYXRjaE1vZGUuTk9UX0NPTlRBSU5TLCBGaWx0ZXJNYXRjaE1vZGUuRU5EU19XSVRILCBGaWx0ZXJNYXRjaE1vZGUuRVFVQUxTLCBGaWx0ZXJNYXRjaE1vZGUuTk9UX0VRVUFMU10sXG4gICAgICAgIG51bWVyaWM6IFtGaWx0ZXJNYXRjaE1vZGUuRVFVQUxTLCBGaWx0ZXJNYXRjaE1vZGUuTk9UX0VRVUFMUywgRmlsdGVyTWF0Y2hNb2RlLkxFU1NfVEhBTiwgRmlsdGVyTWF0Y2hNb2RlLkxFU1NfVEhBTl9PUl9FUVVBTF9UTywgRmlsdGVyTWF0Y2hNb2RlLkdSRUFURVJfVEhBTiwgRmlsdGVyTWF0Y2hNb2RlLkdSRUFURVJfVEhBTl9PUl9FUVVBTF9UT10sXG4gICAgICAgIGRhdGU6IFtGaWx0ZXJNYXRjaE1vZGUuREFURV9JUywgRmlsdGVyTWF0Y2hNb2RlLkRBVEVfSVNfTk9ULCBGaWx0ZXJNYXRjaE1vZGUuREFURV9CRUZPUkUsIEZpbHRlck1hdGNoTW9kZS5EQVRFX0FGVEVSXVxuICAgIH07XG5cbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbiA9IHtcbiAgICAgICAgc3RhcnRzV2l0aDogJ1N0YXJ0cyB3aXRoJyxcbiAgICAgICAgY29udGFpbnM6ICdDb250YWlucycsXG4gICAgICAgIG5vdENvbnRhaW5zOiAnTm90IGNvbnRhaW5zJyxcbiAgICAgICAgZW5kc1dpdGg6ICdFbmRzIHdpdGgnLFxuICAgICAgICBlcXVhbHM6ICdFcXVhbHMnLFxuICAgICAgICBub3RFcXVhbHM6ICdOb3QgZXF1YWxzJyxcbiAgICAgICAgbm9GaWx0ZXI6ICdObyBGaWx0ZXInLFxuICAgICAgICBsdDogJ0xlc3MgdGhhbicsXG4gICAgICAgIGx0ZTogJ0xlc3MgdGhhbiBvciBlcXVhbCB0bycsXG4gICAgICAgIGd0OiAnR3JlYXRlciB0aGFuJyxcbiAgICAgICAgZ3RlOiAnR3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgaXM6ICdJcycsXG4gICAgICAgIGlzTm90OiAnSXMgbm90JyxcbiAgICAgICAgYmVmb3JlOiAnQmVmb3JlJyxcbiAgICAgICAgYWZ0ZXI6ICdBZnRlcicsXG4gICAgICAgIGRhdGVJczogJ0RhdGUgaXMnLFxuICAgICAgICBkYXRlSXNOb3Q6ICdEYXRlIGlzIG5vdCcsXG4gICAgICAgIGRhdGVCZWZvcmU6ICdEYXRlIGlzIGJlZm9yZScsXG4gICAgICAgIGRhdGVBZnRlcjogJ0RhdGUgaXMgYWZ0ZXInLFxuICAgICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgICAgYXBwbHk6ICdBcHBseScsXG4gICAgICAgIG1hdGNoQWxsOiAnTWF0Y2ggQWxsJyxcbiAgICAgICAgbWF0Y2hBbnk6ICdNYXRjaCBBbnknLFxuICAgICAgICBhZGRSdWxlOiAnQWRkIFJ1bGUnLFxuICAgICAgICByZW1vdmVSdWxlOiAnUmVtb3ZlIFJ1bGUnLFxuICAgICAgICBhY2NlcHQ6ICdZZXMnLFxuICAgICAgICByZWplY3Q6ICdObycsXG4gICAgICAgIGNob29zZTogJ0Nob29zZScsXG4gICAgICAgIHVwbG9hZDogJ1VwbG9hZCcsXG4gICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgIGRheU5hbWVzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgIGRheU5hbWVzTWluOiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gICAgICAgIG1vbnRoTmFtZXM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgICAgICAgZGF0ZUZvcm1hdDogJ21tL2RkL3l5JyxcbiAgICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICAgIHRvZGF5OiAnVG9kYXknLFxuICAgICAgICB3ZWVrSGVhZGVyOiAnV2snLFxuICAgICAgICB3ZWFrOiAnV2VhaycsXG4gICAgICAgIG1lZGl1bTogJ01lZGl1bScsXG4gICAgICAgIHN0cm9uZzogJ1N0cm9uZycsXG4gICAgICAgIHBhc3N3b3JkUHJvbXB0OiAnRW50ZXIgYSBwYXNzd29yZCcsXG4gICAgICAgIGVtcHR5TWVzc2FnZTogJ05vIHJlc3VsdHMgZm91bmQnLFxuICAgICAgICBlbXB0eUZpbHRlck1lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kJ1xuICAgIH07XG5cbiAgICB6SW5kZXg6IGFueSA9IHtcbiAgICAgICAgbW9kYWw6IDExMDAsXG4gICAgICAgIG92ZXJsYXk6IDEwMDAsXG4gICAgICAgIG1lbnU6IDEwMDAsXG4gICAgICAgIHRvb2x0aXA6IDExMDBcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIHRyYW5zbGF0aW9uT2JzZXJ2ZXIgPSB0aGlzLnRyYW5zbGF0aW9uU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgZ2V0VHJhbnNsYXRpb24oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25ba2V5XTtcbiAgICB9XG5cbiAgICBzZXRUcmFuc2xhdGlvbih2YWx1ZTogVHJhbnNsYXRpb24pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IHsgLi4udGhpcy50cmFuc2xhdGlvbiwgLi4udmFsdWUgfTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNvdXJjZS5uZXh0KHRoaXMudHJhbnNsYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==