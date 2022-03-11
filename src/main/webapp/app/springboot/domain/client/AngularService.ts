import { Project } from '@/springboot/domain/Project';

export interface AngularService {
  add(project: Project): Promise<void>;
  addWithStyle(project: Project): Promise<void>;
}
