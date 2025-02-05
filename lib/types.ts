export interface Course {
    course_id: number;
    course_code: string;
    title: string;
    description: string;
    duration_months: number;
    price: number;
    department: string;
    category: 'adults' | 'kids';
    image_url?: string;
    program_type: string;
    num_lectures: number;
    skill_level: 'beginner' | 'intermediate' | 'advanced';
    languages: string;
    class_days: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface Curriculum {
    curriculum_id?: number;
    course_id: number;
    week_number: number;
    topic: string;
    content: string;
    learning_objectives?: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface Gallery {
    gallery_id?: number;
    course_id: number;
    image_url: string;
    image_title?: string;
    image_description?: string;
    image_type: 'cover' | 'banner' | 'content' | 'thumbnail';
    display_order?: number;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface Notice {
    notice_id?: number;
    title: string;
    description: string;
    author?: string;
    priority?: 'low' | 'medium' | 'high';
    publish_date: Date;
    expiry_date?: Date;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface DownloadableFile {
    file_id?: number;
    course_id?: number;
    title: string;
    file_url: string;
    file_type: string;
    file_size?: number;
    description?: string;
    download_count?: number;
    is_public?: boolean;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
  }

  export interface Graduate {
    graduate_id?: number;
    course_id: number;
    name: string;
    email: string;
    cell_number?: string;
    year_of_completion: number;
    period_of_study: string;
    final_score?: number;
    certificate_number: string;
    certificate_file_url?: string;
    projects?: Project[];
    social_links?: SocialLink[];
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface Project {
    project_id?: number;
    graduate_id?: number;
    project_title: string;
    description?: string;
    project_url?: string;
    github_url: string;
    technologies_used?: string;
    completion_date?: Date;
    is_featured?: boolean;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface SocialLink {
    link_id?: number;
    graduate_id?: number;
    platform: 'github' | 'linkedin' | 'twitter' | 'portfolio' | 'other';
    url: string;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
  }

  export interface Application {
    applicationId?: number;
    courseId: number;
    studentType: 'child' | 'adult';
    studyMode: string;
    firstName: string;
    lastName: string;
    otherNames?: string;
    gender: 'male' | 'female' | 'other';
    maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
    dateOfBirth: string;
    nationality: string;
    idNumber: string;
    academicYear: string;
    intake: 'january' | 'may' | 'september';
    email: string;
    phoneNumber: string;
    country: string;
    status?: 'pending' | 'approved' | 'rejected' | 'waitlisted';
    applicationDate?: string;
    reviewedBy?: number;
    reviewDate?: string;
    reviewNotes?: string;
    createdAt?: string;
    updatedAt?: string;
  }