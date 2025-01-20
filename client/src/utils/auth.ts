import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile(): JwtPayload | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Checks if token exists and isn't expired
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      const expirationTime = decoded.exp ? decoded.exp * 1000 : 0;
      return expirationTime < Date.now();
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  login(idToken: string): void {
    localStorage.setItem('id_token', idToken); 
    window.location.href = '/'; 
  }
  logout(): void {
    localStorage.removeItem('id_token');
    window.location.href = '/login';
  }
}

export default new AuthService();
