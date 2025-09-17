import React from 'react';
import { useParams } from 'next/navigation';

const MenuPage = () => {
    const params = useParams();
    const { slug } = params as { slug: string };

    return (
        <main>
            <h1>Menu: {slug}</h1>
            {/* Add your menu content here */}
        </main>
    );
};

export default MenuPage;