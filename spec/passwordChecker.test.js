import { isValidPassword } from "../functions/passwordChecker.js";



describe('Password Validation', () => {
    it('should invalidate passwords with less than 8 characters', () => {

        const password = 'passwor';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(false);
    });
});