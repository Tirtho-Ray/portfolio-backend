

import { Types } from 'mongoose';

export type TComplexityLevel = 'Basic' | 'Intermediate' | 'Advanced';
export type TDesignStatus = 'Active' | 'Draft' | 'Archived';

export type TDesign = {
  title: string;
  category: Types.ObjectId; 
  description: string;
  previewImageUrl: string;
  designerName: string;
  usedTools: string[]; 
  effectsUsed: string[]; 
  price: number;
  process: string;
  complexity: TComplexityLevel;
  tags: string[];
  status: TDesignStatus;
  likesCount?: number;
  downloadsCount?: number;
  reviews?:Types.ObjectId;
};
