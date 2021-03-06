import styled from '@emotion/styled'
import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Secondary from '../components/buttons/secondary/Secondary'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout'
import InvisibleLink from '../components/Links/InvisibleLink'
import TertiaryButton from '../components/tertiary/TertiaryButton'
import H1 from '../components/typography/h1/H1'
import H2 from '../components/typography/h2/H2'
import P from '../components/typography/p/P'

const StyledImg = styled.img({
    maxWidth: '100%',
    placeSelf: 'center',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        gridArea: 'img',
    },
})
const StyledArticle = styled.article({
    display: 'grid',
    textAlign: 'center',
    width: '100%',

    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `
            "img text"
        `,
    },
})
const StyledMain = styled.main({
    display: 'grid',
    justifyContent: 'center',
    padding: '0px 10px',

    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
        maxWidth: '820px',
        margin: '0 auto 70px auto',
        'article:nth-of-type(even)': {
            gridTemplateAreas: `
                "text img"
            `,
            'div:first-of-type': {
                paddingRight: '50px',
            },
        },
        'article:nth-of-type(odd)': {
            'div:first-of-type': {
                paddingLeft: '50px',
            },
        },
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px auto 100px auto',
    },
})

const StyledTeriaryButton = styled(TertiaryButton)({
    placeSelf: 'center',
    marginBottom: '50px',
    ['@media only screen and (min-width: 170ch)']: {
        marginBottom: '0px',
        justifySelf: 'start',
        padding: '0px',
    },
})

const StyledH2 = styled(H2)({
    margin: '30px 0px 20px 0px',
})

const StyledInvisibleLink = styled(InvisibleLink)({
    placeSelf: 'center',
    marginBottom: '50px',
    scrollBehavior: 'smooth',
})

const AboutMeContainer = styled.div({
    ['@media only screen and (min-width: 90ch)']: {
        placeSelf: 'center',
        gridArea: 'text',
        textAlign: 'start',
    },
})

const aboutMe = () => {
    return (
        <Layout>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Breadcrumbs
                    style={{ margin: '20px 10px 0px 10px' }}
                    crumbs={[
                        { name: 'Hem', to: '/' },
                        { name: 'Om mig', to: '/om-mig' },
                    ]}
                />
            </div>
            <StyledMain>
                <H1 style={{ textAlign: 'center', margin: '20px 0px' }}>
                    Min Story
                </H1>
                <P style={{ textAlign: 'center', margin: '0px 0px 30px 0xp' }}>
                    Ameliabakar.se ??r min egna plattform f??r att uttrycka det
                    jag tycker ??r roligast i hela v??rlden - bakning!
                </P>
                <StyledInvisibleLink
                    style={{ placeSelf: 'center', marginBottom: '50px' }}
                    to={'#kontakt'}
                >
                    <Secondary>Kontakta mig</Secondary>
                </StyledInvisibleLink>

                <StyledArticle>
                    <StyledImg src={'/img/amelia.png'} alt="Amelia Lidgren" />
                    <AboutMeContainer>
                        <StyledH2>Amelia Lidgren</StyledH2>
                        <P>
                            Jag ??r en Ume??tjej med stort intresse f??r bakning,
                            matlagning och inredning. Jag har drivit min
                            receptblogg sedan 2016 d??r jag har samlat allt fr??n
                            de enklaste sm??kakorna till mer avancerade t??rtor
                            och bakverk.
                        </P>
                        <P style={{ marginBottom: '30px' }}>
                            Jag tycker att matlagning ska vara n??got f??r alla,
                            d??r kreativitet och nyskapande f??r verka fritt! Jag
                            brinner f??r nya uppfinningar och att skapa
                            smakkombinationer, klassiska s??v??l som nya. Mitt m??l
                            ??r att du ska k??nna dig inspirerad n??r du l??ser mina
                            recept!
                        </P>
                        <StyledTeriaryButton name={'Kontakt'} to={'#kontakt'} />
                    </AboutMeContainer>
                </StyledArticle>
                <StyledArticle>
                    <StyledImg
                        src={'/img/insperation.png'}
                        alt={`Amelia's insperation`}
                    />
                    <AboutMeContainer>
                        <StyledH2>Inspiration</StyledH2>
                        <P>
                            Jag drivs sj??lv av inspiration och alla de duktiga
                            kollegor som finns d??r ute. Ibland kan jag scrolla i
                            timmar och bara njuta av alla fina bakverk som
                            tittar fram. N??r jag sj??lv bakar f??rs??ker jag att
                            hitta nya v??gar fram genom att s??tta r??varorna i
                            fokus och testa nya saker. Kanske en dammsugare
                            gjord p?? Fizzy Pop-godis kan fungera?
                        </P>
                        <P>
                            Jag tycker om att skapa vackra bakverk med de
                            ingredienser som finns att tillg?? just f??r dagen i
                            mitt skafferi. Mina recept skriver jag sj??lv och det
                            mesta jag hittar p?? bygger p?? en l??ng serie av
                            tester och tankar som snurrar i mitt huvud!
                        </P>
                    </AboutMeContainer>
                </StyledArticle>
                <StyledArticle>
                    <StyledImg src={'/img/teknik.png'} alt={`3d skrivare`} />
                    <AboutMeContainer>
                        <StyledH2>Teknik</StyledH2>
                        <P>
                            Som komplement till min bakning f??rs??ker jag att
                            anv??nda mig av modern teknik. Jag har en 3D-printer
                            d??r vi modellerar olika typer av bakredskap som
                            sedan kan printas ut och anv??ndas i vardagen. Jag
                            printar ut olika typer av spritstyllar, redskap f??r
                            t??rtdekoration, fotograferingstillbeh??r och mycket
                            annat.
                        </P>
                        <P>
                            Samtliga bilder tar jag med min systemkamera p??
                            stativ. Bland det viktigaste n??r man ska ta bilder
                            ??r att det ??r bra ljus, jag sj??lv ??lskar naturligt
                            dagsljus. D??rf??r f??rs??ker jag att maximera mina
                            bilder genom att flytta runt mitt stativ mellan
                            nyfikna katter och f??nsterbr??dor f??r att kunna ta
                            den ultimata bilden p?? bakverken!
                        </P>
                    </AboutMeContainer>
                </StyledArticle>
                <StyledArticle>
                    <StyledImg src={'/img/bakning.png'} alt={`T??rta`} />
                    <AboutMeContainer>
                        <StyledH2>Bakning</StyledH2>
                        <P>
                            F??r mig ??r bakning n??got som ska vara roligt. Jag
                            hoppas att jag kan ge dig den gl??dje jag k??nner n??r
                            jag bjuder v??nner och familj p?? fika.
                        </P>

                        <P>
                            Beh??ver du hj??lp med n??got inom bakning, recept,
                            fotografering eller annat kan du h??ra av dig till
                            mig!
                        </P>
                        <P>
                            Jag tar emot best??llningar p?? bakverk s??som
                            cupcakes, t??rtor eller annat gott. Du v??ljer sj??lv
                            vad du beh??ver s?? hittar vi v??gen fram??t
                            tillsammans!
                        </P>
                    </AboutMeContainer>
                </StyledArticle>
            </StyledMain>
            <Contact />
        </Layout>
    )
}

export default aboutMe
