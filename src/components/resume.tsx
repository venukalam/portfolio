import moment from "moment";
import React, { useState, useEffect } from 'react';
import { ProfileData, ProfessionalDetails, WorkExperience, Project } from '../interfaces/profile-data';

interface ResumeProps {
    profileData: ProfileData | undefined;
}

export const Resume: React.FC<ResumeProps> = ({ profileData }: ResumeProps) => {

    const [hideButtons, setHideButtons] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        var afterPrint = function () {
            setHideButtons(false);
            setIsEditMode(false);
        };
        window.onafterprint = afterPrint;
    }, []);

    useEffect(() => {
        if (hideButtons) {
            window.print()
        }
    }, [hideButtons])

    return (
        <div>
            {hideButtons ? "" :
                <div>
                    {isEditMode ?
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => { document.designMode = "off"; setIsEditMode(false) }}>
                            Stop Editing
                        </button>
                        :
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => { document.designMode = "on"; setIsEditMode(true) }}>
                            Edit
                        </button>}
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        onClick={() => {
                            document.designMode = "off";
                            setHideButtons(true)
                        }}>
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Print</span>
                    </button>
                </div>
            }

            <div className="">
                <div className="relative px-12 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-20 space-y-12">
                    <div className="grid grid-cols-5 grid-rows-1 gap-6">
                        <div className="col-span-3">
                            <p className="text-6xl font-serif font-bold"><span>{profileData?.full_name}</span></p>
                            <p className="text-base"><span>{profileData?.role}</span></p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-base font-bold leading-tight"><span>{profileData?.personal_details.email}</span></p>
                            <p className="text-base font-bold leading-tight"><span>{profileData?.personal_details.mobile_number}</span></p>
                            <p className="text-base font-bold leading-tight underline text-blue-600"><span><a href={profileData?.linkedin}>{profileData?.linkedin.replace("https://", "").replace("www.", "")}</a></span></p>
                            <p className="text-base font-bold leading-tight underline text-blue-600"><span><a href={profileData?.github}>{profileData?.github.replace("https://", "").replace("www.", "")}</a></span></p>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 grid-rows-1 gap-6 space-y-4">
                        <div className="col-span-3 space-y-8">
                            <div className="space-y-2">
                                <p className="text-lg font-bold text-blue-600"><span>EXPERIENCE</span></p>
                                <div className="space-y-2">
                                    {profileData?.professional_details.work_experience.map(item => {
                                        return <WorkExperienceComponent workExperience={item} />
                                    })}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg font-bold text-blue-600"><span>EDUCATION</span></p>
                                {profileData?.professional_details.education.map(item => {
                                    return (
                                        <div>
                                            <p className="text-lg">
                                                <span className="font-bold">{item?.college}, </span>
                                                <span>{item?.location}</span> — <span className="italic">{item?.title}</span></p>
                                            <p className="text-sm"><span>{moment(item?.start_date).format('MMMM YYYY')} - {moment(item?.end_date).format('MMMM YYYY')}</span></p>
                                            <p className="text-lg"><span>Honors: {item?.honors}</span></p>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                        <div className="col-span-2 space-y-8">
                            <div className="space-y-2">
                                <p className="text-lg font-bold text-blue-600"><span>SKILLS</span></p>
                                <div className="space-y-2">
                                    <table className="table-fixed">
                                        <tbody>
                                            {profileData?.professional_details.skills.map(item => {
                                                return (
                                                    <tr className="">
                                                        <td className="w-1/6">
                                                            <p className="text-lg"><span>{item.title}  </span></p>
                                                        </td>
                                                        <td className="w-1/2">
                                                            <div className="inline-flex items-center">
                                                                {new Array(item.expertise).fill(0).map(item => {
                                                                    return (
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                        </svg>
                                                                    );
                                                                })}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg font-bold text-blue-600"><span>AWARDS/CERTIFICATIONS</span></p>
                                <div className="space-y-2">
                                    {profileData?.professional_details.awards.map(item => {
                                        return (
                                            <div className="">
                                                <p className=""><span className="font-bold">{item?.title}</span></p>
                                                {item?.time_stamp ? <p className="text-sm"><span>{moment(item?.time_stamp).format('MMMM YYYY')}</span></p> : ""}
                                                <p className="text-sm"><span>{item?.description}</span></p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg font-bold text-blue-600"><span>LANGUAGES</span></p>
                                <p className="text-lg"><span>{profileData?.personal_details.languages.join(', ')}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};


const WorkExperienceComponent = ({ workExperience }: { workExperience: WorkExperience }) => {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-lg"><span className="font-bold">{workExperience?.company},</span> <span>{workExperience?.location}</span> — <span className="italic">{workExperience?.position}</span></p>
                <p className="text-sm"><span >{moment(workExperience?.start_date).format('MMMM YYYY')} - {workExperience?.end_date ? moment(workExperience?.end_date).format('MMMM YYYY') : "PRESENT"}</span></p>
            </div>
            <div className="space-y-2">
                {workExperience?.projects.map((item) => {
                    return <ProjectsComponent project={item} />
                })}
            </div>
        </div>
    );
}


const ProjectsComponent = ({ project }: { project: Project }) => {
    return (
        <div className="space-y-1">
            <p className="text-lg"><span className="font-bold">{project?.title}</span></p>
            <p className="text-sm"><span className="font-bold">Technologies Used: </span><span>{project?.technologies_used.join(', ')}</span></p>
            <ul className="list-disc list-inside space-y-1">
                {project?.description.map(item => {
                    return (
                        <li className="text-sm leading-snug">
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}