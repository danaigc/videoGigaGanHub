'use client'

import Link from 'next/link';
import ComparisonSlider from "@/components/ComparisonSlider";
import Image from "next/image";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">

            <h1 className="text-4xl font-bold mb-4">VideoGigaGAN: Towards Detail-rich Video Super-Resolution</h1>
            <p className="text-lg mb-8">VideoGigaGAN is a new generative VSR model that can produce videos with
                high-frequency details and temporal consistency. It builds upon a large-scale image upsampler --
                GigaGAN, and introduces techniques that significantly improve the temporal consistency of upsampled
                videos.</p>

            <h2 className="text-2xl font-bold mb-4">8× Upsampling results (128×128→1024×1024)</h2>
            <p className="text-lg mb-8">Our model is able to upsample a video up to 8× with rich details.</p>



    {/*        <div className="column has-text-centered head">
                <h1 className="title is-2 publication-title">
                    VideoGigaGAN: Towards Detail-rich Video Super-Resolution
                </h1>

                <div className="is-size-5 publication-authors">
            <span className="author-block">
              <a href="https://twizwei.github.io/">Yiran Xu</a><sup><img src="./assets/images/adobe.png"
                                                                         width="15"/></sup><sup>🐢</sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
              <a href="https://taesung.me/">Taesung Park</a><sup><img src="./assets/images/adobe.png"
                                                                      width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
                <a href="https://richzhang.github.io/">Richard Zhang</a><sup><img src="./assets/images/adobe.png"
                                                                                  width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
                <a href="https://yzhou359.github.io/">Yang Zhou</a><sup><img src="./assets/images/adobe.png"
                                                                             width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
                <a href="https://research.adobe.com/person/eli-shechtman/">Eli Shechtman</a><sup><img
                        src="./assets/images/adobe.png" width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
                  <a href="https://pages.cs.wisc.edu/~fliu/">Feng Liu</a><sup><img src="./assets/images/adobe.png"
                                                                                   width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
              <a href="https://jbhuang0604.github.io/">Jia-Bin Huang</a><sup>🐢</sup>&nbsp;&nbsp;&nbsp;</span>
                    <span className="author-block">
                <a href="https://difanliu.github.io/">Difan Liu</a><sup><img src="./assets/images/adobe.png"
                                                                             width="15"/></sup>&nbsp;&nbsp;&nbsp;</span>
                </div>

                <div className="is-size-5 publication-authors">
                    <span
                        className="author-block"><sup>🐢</sup>University of Maryland, College Park</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="author-block"><sup><img src="./assets/images/adobe.png" width="15"/></sup>Adobe Research</span>
                </div>


                <div className="column has-text-centered">
                    <div className="publication-links">
                        <span className="link-block">
                <a href="https://arxiv.org/pdf/2404.12388.pdf"
                   className="external-link button is-normal is-rounded is-dark">
                  <span className="icon">
                      <i className="ai ai-arxiv"></i>
                  </span>
                  <span>arXiv</span>
                </a>
              </span>
                        <span className="link-block">
                <a href="./assets/supp.pdf" className="external-link button is-normal is-rounded is-dark">
                  <span className="icon">
                      <svg className="svg-inline--fa fa-file-pdf fa-w-12" aria-hidden="true" focusable="false"
                           data-prefix="fas" data-icon="file-pdf" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor"
                                                                        d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg>
                  </span>
                  <span>Supplementary PDF</span>
                </a>
              </span>
                        <span className="link-block">
                <a href="#BibTeX" className="external-link button is-normal is-rounded is-dark">
                  <span className="icon">
                      <svg className="svg-inline--fa fa-book fa-w-14" aria-hidden="true" focusable="false"
                           data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor"
                                                                        d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
                  </span>
                  <span>BibTex</span>
                  </a>
              </span>


                    </div>
                </div>
            </div>*/}


            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0000-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0000-output-8x.mp4"
                alt="Example Video"
            />

            <br/>




            <div className={"text-center"}><h2>Abstract</h2></div>
            <p>Video restoration techniques have made impressive progress in maintaining temporal consistency during the
                upsampling of videos. However, these approaches often produce results that are blurrier than their
                image-based counterparts, as they are limited by their generative capabilities. This raises a
                fundamental question: can the success of generative image upsamplers be extended to video
                super-resolution (VSR) tasks while preserving temporal consistency?

                To address this challenge, we introduce a new generative VSR model, named ViDeRNet, which can produce
                videos with high-frequency details and consistent temporal behavior. ViDeRNet builds upon a large-scale
                image upsampler, GigaGAN, as its foundation. However, simply incorporating temporal modules into the
                GigaGAN architecture to create a video model leads to severe temporal flickering artifacts.

                To overcome this issue, we have identified several key problems and developed techniques that
                significantly improve the temporal consistency of the upsampled videos. Our experiments demonstrate
                that, unlike previous VSR methods, ViDeRNet generates temporally consistent videos with more
                fine-grained visual details. We validate the effectiveness of ViDeRNet by comparing it with
                state-of-the-art VSR models on public datasets and showcasing video results with up to 8×
                super-resolution.

                The key contributions of our work are:
                1. The introduction of ViDeRNet, a novel generative VSR model that can produce videos with
                high-frequency details and temporal consistency.
                2. The identification of critical issues that cause temporal flickering in video upsampling and the
                proposal of techniques to address them.
                3. Comprehensive experiments demonstrating the superiority of ViDeRNet over existing state-of-the-art
                VSR methods in terms of visual quality and temporal stability.</p>
            <br/>
            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0001-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0001-output-8x.mp4"
                alt="Example Video"
            />

            <br/>


            <br/>
            <h2 className={"text-center font-bold"}>Method Overview</h2>
            <br/>
            <div className={"w-full flex justify-center items-center"}>

                <Image width={500} height={500} src={"https://videogigagan.github.io/assets/images/method_overview.svg"}
                       alt={"image overview"}/>
            </div>

            <br/>

            <p>
                Our Video Super-Resolution (VRS) model is constructed upon the asymmetric U-Net architecture of the
                GigaGAN image upsampler. To ensure temporal consistency, we first transform the image upsampler into a
                video upsampler by incorporating temporal attention layers into the decoder blocks. Additionally, we
                enhance consistency by integrating features from a flow-guided propagation module. To mitigate aliasing
                artifacts, we employ an Anti-aliasing block in the downsampling layers of the encoder. Finally, we
                directly shuttle high-frequency features through skip connections to the decoder layers, compensating
                for the loss of details caused by the BlurPool process.

                The key aspects of our VRS model architecture are:

                1. Asymmetric U-Net structure inherited from the GigaGAN image upsampler as the foundation.
                2. Incorporation of temporal attention layers in the decoder to enforce temporal consistency.
                3. Integration of flow-guided propagation features to further enhance temporal coherence.
                4. Use of Anti-aliasing blocks in the encoders downsampling layers to suppress aliasing artifacts.
                5. Direct feature shuttling via skip connections to compensate for detail loss during BlurPool
                operations.

                This multi-pronged approach enables our VRS model to generate temporally consistent videos with
                high-frequency visual details, outperforming previous state-of-the-art methods.
            </p>

            <br/>
            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0002-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0002-output-8x.mp4"
                alt="Example Video"
            />
            <br/>


            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0003-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0003-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0004-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0004-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0005-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0005-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0006-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0006-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0007-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0007-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0008-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0008-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0009-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0009-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0010-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0010-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0011-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0011-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0012-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0012-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0013-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0013-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0014-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0014-output-8x.mp4"
                alt="Example Video"
            />
            <br/>


            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0015-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0015-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0016-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0016-output-8x.mp4"
                alt="Example Video"
            />
            <br/>


            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0017-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0017-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0018-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0018-output-8x.mp4"
                alt="Example Video"
            />
            <br/>

            <ComparisonSlider
                original="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0019-input-8x.mp4"
                modified="https://videogigagan.oss-cn-beijing.aliyuncs.com/video/0019-output-8x.mp4"
                alt="Example Video"
            />

            <br/>

            <nav className="mb-8">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/method-overview" className="text-blue-500 hover:text-blue-700">
                            Method Overview
                        </Link>
                    </li>
                    <li>
                        <Link href="/ablation-study" className="text-blue-500 hover:text-blue-700">
                            Ablation Study
                        </Link>
                    </li>
                    <li>
                        <Link href="/comparison-sota" className="text-blue-500 hover:text-blue-700">
                            Comparison with SOTAs
                        </Link>
                    </li>
                    <li>
                        <Link href="/more-results" className="text-blue-500 hover:text-blue-700">
                            More Results
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Add more content */}
        </div>
    )
}