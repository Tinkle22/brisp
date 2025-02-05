import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [gallery] = await pool.query(
            'SELECT * FROM gallery WHERE gallery_id = ? AND is_active = true',
            [params.id]
        );
        
        if (!(gallery as any[])[0]) {
            return NextResponse.json(
                { error: 'Gallery not found' },
                { status: 404 }
            );
        }

        return NextResponse.json((gallery as any[])[0]);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body: Partial<Gallery> = await request.json();
        const {
            image_title,
            image_description,
            image_type,
            display_order,
            is_active
        } = body;

        const [result] = await pool.query(
            `UPDATE gallery
             SET image_title = COALESCE(?, image_title),
                 image_description = COALESCE(?, image_description),
                 image_type = COALESCE(?, image_type),
                 display_order = COALESCE(?, display_order),
                 is_active = COALESCE(?, is_active)
             WHERE gallery_id = ?`,
            [image_title, image_description, image_type, display_order, is_active, params.id]
        );

        if ((result as any).affectedRows === 0) {
            return NextResponse.json(
                { error: 'Gallery not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Updated successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const [result] = await pool.query(
            'UPDATE gallery SET is_active = false WHERE gallery_id = ?',
            [params.id]
        );

        if ((result as any).affectedRows === 0) {
            return NextResponse.json(
                { error: 'Gallery not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}