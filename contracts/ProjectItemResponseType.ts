
export interface ProjectConteResponseType {
    title: string;
    content: ProjectItemResponseType[];

}

export interface ProjectItemResponseType {
    text: string;
    image: string;
    image_mobile: string;
    is_video: boolean;
    video: string;
    video_mobile: string;
    is_animation: boolean;
    animation: string;
    animation_mobile: string;
}
