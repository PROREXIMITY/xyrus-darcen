"use client";

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import styles from "./styles.module.css";
import { projects } from "./mockData";

function Projects() {
	return (
		<section
			id="projects"
			className="bg-[rgb(11,11,15)] py-20 px-5 min-h-screen"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-20">
					<div className="inline-block mb-4">
						<span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 animate-pulse">
							✨ Featured Work
						</span>
					</div>
					<h2 className="font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
						PROJECTS
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg">
						Here are the projects that I worked on, showcasing my skills for
						both personal and collaborative works.
					</p>
				</div>

				{/* Projects List */}
				<div className="flex flex-col gap-8 md:gap-16">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`flex ${
								index % 2 === 0 ? "justify-start" : "justify-end"
							} px-0 md:px-4`}
						>
							<Tilt
								className="w-full lg:w-[900px]"
								tiltMaxAngleX={2}
								tiltMaxAngleY={2}
								scale={1.01}
								transitionSpeed={2000}
								gyroscope={false}
							>
								<div className="relative group/card">
									{/* Smooth Gradient Glow Border */}
									{/* Always-visible subtle base glow */}
									<div className="absolute -inset-[2px] rounded-2xl opacity-10">
										<div className="absolute inset-0 bg-gradient-to-r from-[rgb(65,88,208)] via-[rgb(200,80,192)] to-[rgb(255,204,112)] rounded-2xl animate-gradient-shift" />
									</div>

									{/* Enhanced hover glow */}
									<div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-700 blur-sm">
										<div className="absolute inset-0 bg-gradient-to-r from-[rgb(65,88,208)] via-[rgb(200,80,192)] to-[rgb(255,204,112)] rounded-2xl animate-gradient-shift" />
									</div>

									{/* Subtle Static Border Glow */}
									<div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[rgb(65,88,208)]/20 via-[rgb(200,80,192)]/20 to-[rgb(255,204,112)]/20 blur-[1px]" />

									{/* Main Card */}
									<div className="relative bg-[rgba(20,20,25,0.95)] backdrop-blur-xl rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[rgb(200,80,192)]/20 border border-white/10 group-hover/card:border-white/20">
										{/* Year Background - Hidden on mobile */}
										<div
											className={`absolute hidden md:block ${
												index % 2 === 0 ? "right-0" : "left-0"
											} top-1/2 -translate-y-1/2 text-[12rem] md:text-[16rem] font-bold text-white/5 select-none pointer-events-none z-0`}
										>
											{project.year}
										</div>

										{/* Content Layout */}
										<div
											className={`flex flex-col ${
												index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
											} relative z-10`}
										>
											{/* Main Content (65%) */}
											<div className="flex-[65] p-4 md:p-8">
												<div className="flex flex-col gap-4 md:flex-row md:gap-6">
													{/* Project Image */}
													<div className="relative w-full h-48 md:w-64 md:h-40 flex-shrink-0 group/image">
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover rounded-xl transition-transform duration-500 group-hover/image:scale-105"
														/>
													</div>

													{/* Project Info */}
													<div className="flex-1 space-y-2 md:space-y-3">
														<h3 className="text-xl md:text-2xl font-bold text-white group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-pink-400 group-hover/card:bg-clip-text group-hover/card:text-transparent transition-all duration-500">
															{project.title}
														</h3>
														<p className="text-gray-400 text-sm leading-relaxed">
															{project.description}
														</p>
													</div>
												</div>
											</div>

											{/* Actions (35%) */}
											<div
												className={`flex-[35] bg-white/5 p-4 md:p-8 flex flex-col justify-center gap-3 md:gap-4 
                        border-t md:border-t-0 ${
							index % 2 === 0 ? "md:border-l" : "md:border-r"
						} border-white/10`}
											>
												{/* Primary Button - View Live */}
												<a
													href={project.liveLink}
													target="_blank"
													rel="noopener noreferrer"
													className="group/primary block"
												>
													<div className={`relative overflow-hidden flex items-center justify-between p-4 bg-gradient-to-r from-[rgb(65,88,208)] via-[rgb(200,80,192)] to-[rgb(255,204,112)] rounded-xl ${styles.gradientX} ${styles.hoverGlow}`}>
														<span className="text-white font-bold">
															View Live Demo
														</span>
														<svg
															className="w-5 h-5 text-white transform group-hover/primary:translate-x-1 transition-transform duration-300"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M17 8l4 4m0 0l-4 4m4-4H3"
															/>
														</svg>
														{/* Shimmer effect on hover */}
														<div className="absolute inset-0 -translate-x-full group-hover/primary:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
													</div>
												</a>

												{/* Secondary Button or Private Badge */}
												{project.githubLink ? (
													<a
														href={project.githubLink}
														target="_blank"
														rel="noopener noreferrer"
														className="group/secondary block"
													>
														<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
															<span className="text-white/90 font-medium">
																View Code
															</span>
															<svg
																className="w-5 h-5 text-white/90 transform group-hover/secondary:translate-x-1 transition-transform duration-300"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
																/>
															</svg>
														</div>
													</a>
												) : (
													<div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30 backdrop-blur-sm">
														<div className="flex items-center gap-3">
															<div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
																<svg
																	className="w-4 h-4 text-amber-400"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={2}
																		d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
																	/>
																</svg>
															</div>
															<div className="flex-1">
																<div className="text-amber-200 font-semibold text-sm">
																	Private Repository
																</div>
																<div className="text-amber-300/70 text-xs">
																	Client project code
																</div>
															</div>
														</div>
													</div>
												)}
											</div>
										</div>

										{/* Tech Stack Ribbon */}
										<div className="relative border-t border-white/10 bg-gradient-to-r from-[rgb(65,88,208)]/5 via-[rgb(200,80,192)]/5 to-[rgb(255,204,112)]/5 px-4 py-3 md:px-6 md:py-4">
											<div className={`flex flex-wrap gap-2 ${styles.scrollbarHide}`}>
												{project.tech.map((tech) => (
													<span
														key={tech}
														className="inline-flex px-2 py-1 md:px-3 md:py-1.5 bg-white/10 text-[10px] md:text-xs rounded-full border border-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-[rgb(200,80,192)]/50 transition-all duration-300 hover:scale-110"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</Tilt>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
