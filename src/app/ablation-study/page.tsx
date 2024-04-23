export default function AblationStudy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Ablation Study</h1>
            <p className="text-lg mb-8">Strong hallucination capability of image GigaGAN results in temporally flickering artifacts, especially aliasing caused by the artifacted LR input.</p>

            <div className="mb-8">
                {/*<img src="/ablation-study.jpg" alt="Ablation Study" />*/}
            </div>

            <p className="text-lg mb-8">We progressively add components to the base model to handle these artifacts.</p>
            {/* Add more content */}
        </div>
    )
}