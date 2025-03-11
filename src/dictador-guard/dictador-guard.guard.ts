import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DictadorGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRole='Admin';
    
    const req=context.switchToHttp().getRequest();
    const user=req.user;
    console.log(user);
    if(user.rol==validRole){
      return true;
    }
    throw new UnauthorizedException('Forbiden for your rol');
  }
}
