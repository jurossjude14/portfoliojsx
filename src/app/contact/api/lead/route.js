import { google } from 'googleapis';
import { NextResponse } from 'next/server';


export async function POST(request) {
  try {
      const body = await request.json();
      //const raw = JSON.stringify({...body});
      const {fullname, phone, email, message,today} = body;
  
      const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
  
        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
  
        const response = await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'A1:E1', // Adjust if your sheet range is different
          valueInputOption: 'USER_ENTERED',
          requestBody:{
              values:[
                [fullname, phone, email, message, today]
              ]
          }
        });
      

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      if (response.status === 201) {
        //senddata(body);
        console.log('Sucessfully Created Data',response.status);
      }
      return NextResponse.json({ message:"Sucessfully Added Data", status:response.status });
  } catch (error) {
      //console.log(error);
      return NextResponse.json({ message:"Something Went Wrong", status:error });
  }
};


