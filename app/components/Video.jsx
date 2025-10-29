"use client"

import React from 'react'

const Video = () => {
	return (
		<section className="video-section py-16 lg:py-24 px-6 lg:px-12 bg-white">
			<div className="max-w-6xl mx-auto text-center">
				<h3 className="text-sm font-semibold text-[#0d2847]/70 mb-3">VIDEO</h3>
				<h2 className="text-3xl lg:text-4xl font-bold text-[#0d2847] mb-6">so easy even a cat can do it</h2>

				<div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-[#0d2847]/10">
					<video
						controls
						playsInline
						className="w-full h-auto bg-black"
						poster="/hero1.png"
					>
						<source src="/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	)
}

export default Video

