import { AuthorInDbDto } from "../Authors/AuthorInDb.dto";
import { CategoryInDbDto } from "../Categories/CategoryInDb.dto";
import { ConverterInDbDto } from "../Converters/ConverterInDb.dto";
import { PersonalityInDbDto } from "../personalities/PersonalityInDb.dto";
import { SexInDbDto } from "../Sex/SexInDb.dto";
import { StoryStatusInDbDto } from "../StoryStatus/StoryStatusInDb.dto";
import { StyleInDbDto } from "../Styles/StyleInDb.dto";
import { WorldViewInDbDto } from "../WorldViews/WorldViewInDb.dto";

export interface StoryInDbDto {
  id: string;
  name: string;
  description: string;
  poster: {
    poster150: string;
    poster300: string;
    poster600: string;
  };
  converterId: string;
  converter: ConverterInDbDto;
  authorId: string;
  author: AuthorInDbDto;
  counters: {
    starRate: number;
    countChapter: number;
    countView: number;
    countText: number;
    countBookMark: number;
    countVoteUp: number;
    countReview: number;
    countComment: number;
  };
  categories: CategoryInDbDto[];
  status: StoryStatusInDbDto;
  worldViews: WorldViewInDbDto[];
  personalities: PersonalityInDbDto[];
  sex: SexInDbDto;
  style: StyleInDbDto;
}
