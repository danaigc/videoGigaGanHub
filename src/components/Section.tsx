import React, { ReactNode } from 'react';

type SectionProps = {
    id: string;
    children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <section id={id} className="py-8">
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
}
