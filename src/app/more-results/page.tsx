// app/more-results/page.tsx
'use client'
import ComparisonSlider from '@/components/ComparisonSlider';

export default function MoreResults() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">More Results on Generic Videos</h1>
            <p className="text-lg mb-8">Our model is able to handle generic videos of different categories.</p>

            <div className="mb-8">
                <ComparisonSlider
                    original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0000-input-8x.mp4"
                    modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0000-output-8x.mp4"
                    alt="Example Video"
                />
            </div>



            {/* Add more content */}
        </div>
    )
}