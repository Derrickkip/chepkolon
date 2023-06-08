import React from 'react'

import classNames from 'classnames'

import styles from './Pillar.module.css'

import image1 from '../../assets/class.jpg'
import image2 from '../../assets/class2.jpg'
import image3 from '../../assets/gate.jpg'

const Pillar = (props) => {
    console.log(props.src.default.src)
    return (
        <>
        <div className={styles.PillarContainer}>
            <div className={styles.BackgroundOverlay}></div>
            <div className={styles.PillarInner}>
                <div className={styles.PillarRow}>
                    <div className={classNames(styles.PillarColumn, styles.TextAbove, styles.Col50)}>
                        <div className={classNames(styles.ColumnWrapper, styles.TextColumnWrapper)}>
                            <div className={styles.TextColumnWrap}>
                                <div className={styles.PillarHeading}>
                                    <div className={styles.HeadingWrap}>
                                        <h2>Christian Foundation</h2>
                                    </div>
                                </div>
                                <div className={styles.PillarsText}>
                                    <div className={styles.HeadingWrap}>
                                        <div className='clearfix'>
                                            <p>Sport is a tool to install positive habits and values. Through their practice, the pupils learn Fair Play, as well as self-discipline, collaborative work, leadership, communication and resilience. Through traditional sports, and also increasingly with the diversification of sports, we have placed emphasis on instilling a life commitment with these, as a way of developing Wellness and healthy lifestyle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.PillarColumn, styles.Col50, styles.TextBelow)}>
                        <div className={classNames(styles.ColumnWrapper, styles.ImageColumnWrapper)}>
                            <div className={classNames(styles.ImageColumnWrapperOverlay, styles.ImageLeft)} style={{backgroundImage: `url(${image1.src})`}}></div>
                            <div className={styles.ImageWrap}>
                                <div className={styles.Spacer}>
                                    <div className=''>
                                        <div className=''>
                                            <div className={styles.SpacerInner}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.PillarContainer}>
            <div className={styles.BackgroundOverlay}></div>
            <div className={styles.PillarInner}>
                <div className={styles.PillarRow}>
                <div className={classNames(styles.PillarColumn, styles.Col50, styles.TextBelow)}>
                        <div className={classNames(styles.ColumnWrapper, styles.ImageColumnWrapper)}>
                            <div className={styles.ImageColumnWrapperOverlay} style={{backgroundImage: `url(${image2.src})`}}></div>
                            <div className={styles.ImageWrap}>
                                <div className={styles.Spacer}>
                                    <div className=''>
                                        <div className=''>
                                            <div className={styles.SpacerInner}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.PillarColumn, styles.TextAbove, styles.Col50)}>
                        <div className={classNames(styles.ColumnWrapper, styles.TextColumnWrapper)}>
                            <div className={styles.TextColumnWrap}>
                                <div className={styles.PillarHeading}>
                                    <div className={styles.HeadingWrap}>
                                        <h2>Academic</h2>
                                    </div>
                                </div>
                                <div className={styles.PillarsText}>
                                    <div className={styles.HeadingWrap}>
                                        <div className='clearfix'>
                                            <p>Sport is a tool to install positive habits and values. Through their practice, the pupils learn Fair Play, as well as self-discipline, collaborative work, leadership, communication and resilience. Through traditional sports, and also increasingly with the diversification of sports, we have placed emphasis on instilling a life commitment with these, as a way of developing Wellness and healthy lifestyle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.PillarContainer}>
            <div className={styles.BackgroundOverlay}></div>
            <div className={styles.PillarInner}>
                <div className={styles.PillarRow}>
                    <div className={classNames(styles.PillarColumn, styles.TextAbove, styles.Col50)}>
                        <div className={classNames(styles.ColumnWrapper, styles.TextColumnWrapper)}>
                            <div className={styles.TextColumnWrap}>
                                <div className={styles.PillarHeading}>
                                    <div className={styles.HeadingWrap}>
                                        <h2>Sports</h2>
                                    </div>
                                </div>
                                <div className={styles.PillarsText}>
                                    <div className={styles.HeadingWrap}>
                                        <div className='clearfix'>
                                            <p>Sport is a tool to install positive habits and values. Through their practice, the pupils learn Fair Play, as well as self-discipline, collaborative work, leadership, communication and resilience. Through traditional sports, and also increasingly with the diversification of sports, we have placed emphasis on instilling a life commitment with these, as a way of developing Wellness and healthy lifestyle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.PillarColumn, styles.Col50, styles.TextBelow)}>
                        <div className={classNames(styles.ColumnWrapper, styles.ImageColumnWrapper)}>
                            <div className={classNames(styles.ImageColumnWrapperOverlay, styles.ImageLeft)} style={{backgroundImage: `url(${image3.src})`}}></div>
                            <div className={styles.ImageWrap}>
                                <div className={styles.Spacer}>
                                    <div className=''>
                                        <div className=''>
                                            <div className={styles.SpacerInner}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pillar