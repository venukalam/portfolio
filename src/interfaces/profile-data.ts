export interface ProfileData {
    name: string;
    full_name: string;
    role: string;
    github: string;
    portfolio: string;
    linkedin: string;
    twitter: string;
    personal_details: PersonalDetails;
    professional_details: ProfessionalDetails;
}

export interface PersonalDetails {
    address: string;
    mobile_number: string;
    email: string;
    dob: Date;
    languages: string[];
}

export interface ProfessionalDetails {
    about: string;
    work_experience: WorkExperience[];
    skills: Skill[];
    education: Education[];
    awards: Award[];
    interests: Interest[];
}

export interface Award {
    title: string;
    description: string;
    time_stamp: string;
}

export interface Education {
    title: string;
    college: string;
    start_date: Date;
    end_date: Date;
    honors: string;
    location: string;
}

export interface Interest {
    title: string;
    description: string;
}

export interface Skill {
    title: string;
    expertise: number;
}

export interface WorkExperience {
    company: string;
    location: string;
    position: string;
    start_date: Date;
    end_date: string;
    projects: Project[];
}

export interface Project {
    title: string;
    description: string[];
    technologies_used: string[];
}

export default ProfileData;