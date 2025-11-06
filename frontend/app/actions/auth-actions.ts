"use server";

import { saltAndHashPassword } from "@/lib/password-util";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export async function signUp({
    email,
    password
}: {
    email: string;
    password: string;
}) {
    try {
        // Email 존재유무 확인
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (existingUser) {
            return { message: "이미 존재하는 이메일입니다." };
        }

        // Email 생성
        const user = await prisma.user.create({
            data: {
                email,
                hashedPassword: saltAndHashPassword(password) // 해싱된 PW
            },
        });

        if (user) {
            return {status: "ok"};
        }
    } catch (err) {
        return { status:"error", message: "회원가입에 실패했습니다." };
    }
}