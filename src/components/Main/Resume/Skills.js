import React, { Component } from 'react';
import { getI18n } from 'react-i18next';
import { Trans } from 'react-i18next'
import {colors} from '../../Main/data/skills'

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';



// Simulando função t para internacionalização:
const t = (key) => {
    return getI18n().t(`main:${key}`);
}

const handleProps = ({ categories, skills }) => ({
    buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
        ...obj,
        [key]: false,
    }), { All: true }),
    skills,
});

class Skills extends Component {

    constructor(props) {
        super(props);

        const skills = props.skills.map((skill) => ({ ...skill, category: skill.category.sort() }))
        const categories = [...new Set(
            skills.reduce((acc, { category }) => acc.concat(category), []),
        )].sort().map((category, index) => ({
            name: category,
            color: colors[index],
        }));
        const handled = handleProps({ categories: categories, skills: skills });
        this.state = {categories, ...handled};

    }

    getRows() {
        const all = 'All';
        const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
            this.state.buttons[key] ? key : cat
        ), all);

        return this.state.skills.sort((a, b) => {
            let ret = 0;
            if (a.competency > b.competency) ret = -1;
            else if (a.competency < b.competency) ret = 1;
            else if (a.category[0] > b.category[0]) ret = -1;
            else if (a.category[0] < b.category[0]) ret = 1;
            else if (a.title > b.title) ret = 1;
            else if (a.title < b.title) ret = -1;
            return ret;
        }).filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
            .map((skill) => (
                <SkillBar
                    categories={this.state.categories}
                    data={skill}
                    key={skill.title}
                />
            ));
    }

    getButtons() {
        console.debug(this.state.buttons)
        return Object.keys(this.state.buttons).map((key) => (
            <CategoryButton
                label={key}
                key={key}
                active={this.state.buttons}
                handleClick={this.handleChildClick}
            />
        ));
    }

    handleChildClick = (label) => {
        this.setState((prevState) => {
            // Toggle button that was clicked. Turn all other buttons off.
            const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
                ...obj,
                [key]: (label === key) && !prevState.buttons[key],
            }), {});
            // Turn on 'All' button if other buttons are off
            buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
            return { buttons };
        });
    }

    render() {
        return (
            <div className="skills">
                <div className="link-to" id="resume.section.skills" />
                <div className="title">
                    <h3>{t('resume.section.skills')}</h3>
                    <p>
                        <Trans
                            i18nKey="main:resume.skills.description"
                            components={{
                                bold: <strong />
                            }}
                        />
                    </p>
                </div>
                <div className="skill-button-container">
                    {this.getButtons()}
                </div>
                <div className="skill-row-container">
                    {this.getRows()}
                </div>
            </div>
        );
    }
}

export default Skills;
