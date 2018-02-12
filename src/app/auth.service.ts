import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiam9obi5kb2UiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTE4NDM1NTExLCJhdXRob3JpdGllcyI6WyJTVEFOREFSRF9VU0VSIl0sImp0aSI6IjgxZGNlNDliLTM1YjItNDAzZi1iOTQ5LWNiOWFkMjExYjE3MCIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.HdgnHfX7n_6xJrIdlYL-DsfLwAFfnX8iF0Fq1kZ0BH0';
  }
}
