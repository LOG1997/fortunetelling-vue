export interface YearChar8ex {
    yearChar8Id: number;
    yearChar8Name: string;
    yearChar8StemName: string;
    yearChar8BranchName: string;
    yearStemTenGod: string;
    yearBranchTenGod: string[];
    yearChar8HiddenStem: string[]
}

export interface MonthChar8ex {
    monthChar8Id: number;
    monthChar8Name: string;
    monthChar8StemName: string;
    monthChar8BranchName: string;
    monthStemTenGod: string;
    monthBranchTenGod: string[];
    monthChar8HiddenStem: string[];
}

export interface DayChar8ex {
    dayChar8Id: number;
    dayChar8Name: string;
    dayChar8StemName: string;
    dayChar8BranchName: string;
    dayStemTenGod: string;
    dayBranchTenGod: string[];
    dayChar8HiddenStem: string[];
}

export interface HourChar8ex {
    hourChar8Id: number;
    hourChar8Name: string;
    hourChar8StemName: string;
    hourChar8BranchName: string;
    hourStemTenGod: string;
    hourBranchTenGod: string[];
    hourChar8HiddenStem: string[];
}

export interface Char8plat {
    yearChar8: any;
    monthChar8: any;
    dayChar8: any,
    hourChar8: any
}
