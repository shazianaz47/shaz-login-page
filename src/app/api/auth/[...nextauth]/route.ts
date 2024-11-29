//app/api/auth/[...nextauth]/route.ts


import {handlers} from '../../../../../lib/auth';
//http://localhost:3000/api/auth/callback/github    is path ko call krne k lia handlers ka function
export const {POST ,GET}= handlers;