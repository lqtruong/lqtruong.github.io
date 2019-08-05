import { License } from './gh-license.model';

export class Project {
  id: string;
  name: string;
  title: string;
  desc: string;
  icon: string;
  iconalt: string;
  img: string;
  imgalt: string;
  reflink: string;
  techs: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  language: string;
  license: License;
}
