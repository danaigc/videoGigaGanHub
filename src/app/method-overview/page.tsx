export default function MethodOverview() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Method Overview</h1>
            <p className="text-lg mb-8">Our Video Super-Resolution (VSR) model is built upon the asymmetric U-Net architecture of the image GigaGAN upsampler. To enforce temporal consistency, we first inflate the image upsampler into a video upsampler by adding temporal attention layers into the decoder blocks. We also enhance consistency by incorporating the features from the flow-guided propagation module. To suppress aliasing artifacts, we use Anti-aliasing block in the downsampling layers of the encoder. Lastly, we directly shuttle the high frequency features via skip connection to the decoder layers to compensate for the loss of details in the BlurPool process.</p>
            {/*<img src="/method-overview.svg" alt="Method Overview" className="mb-8" />*/}
            {/* Add more content */}
        </div>
    )
}