import bcrypt from "bcryptjs"; // 공식문서 ㄱㄱ

// salt + bcrypt
export function saltAndHashPassword(password: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

// DB에 있는 비밀번호 vs 입력받은 비밀번호
export function comparePasswords(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
}