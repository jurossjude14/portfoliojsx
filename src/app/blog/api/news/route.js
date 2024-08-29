import { NextResponse } from "next/server";
import axios from "axios";

const categories = 'tech';
const search = 'Best Coding practice and Wordpress Development';
const limit = '3';

export async function GET() {
    try {
        const params = {
            api_token: process.env.NEXT_PUBLIC_NEWSAPI,
            categories,
            search,
            limit,
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_NEWSAPIURL}`, {
            params,
        });

        if (!response.data.status === 'ok') {
            throw new Error(`API error: ${response.data.message}`);
        }
        const data = await response.data;
        //console.log(data);

        return NextResponse.json({ message: "Sucessfully Added Data", status: response.status, data: data });
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong", status: error });
    }
}

