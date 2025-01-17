import { isValidPassword } from "../functions/passwordChecker.js";



describe('Password Validation', () => {
    it('should invalidate passwords with less than 8 characters', () => {

        const password = 'passw1@';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(false);
    });
    
    it('should validate passwords with more than 8 characters', () => {

        const password = 'password1@';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(true);
    });

    it('should validate password with special characters', () => {
        const password = 'password1@';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(true);
    });
    it('should invalidate password with special characters', () => {
        const password = 'password1';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(false);
    });
    it('should validate password with a number', () => {
        const password = 'password1@';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(true);
    });
    it('should invalidate password without a number', () => {
        const password = 'password@';
        
        const result = isValidPassword(password);
        
        expect(result).toBe(false);
    });
    it("should validate password without IPL", () => {
        const password = "password1@";

        const result = isValidPassword(password);

        expect(result).toBe(true);
    });
});