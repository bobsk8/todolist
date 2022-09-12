import { SetMetadata } from '@nestjs/common';

import { RolesEnum } from 'src/common/enums/role.enum';
import { ROLES_KEY } from 'src/common/helpers/roles-key';

export const Roles = (...roles: RolesEnum[]) => SetMetadata(ROLES_KEY, roles);
