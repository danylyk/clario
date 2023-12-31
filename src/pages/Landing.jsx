"use client";
import Image from "next/image";
import { Events } from 'react-scroll';
import { createContext, useEffect, useRef } from "react";

import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

import { Footer } from "@templates/Footer";
import { Header } from "@templates/Header";
import { SectionBlue } from "@templates/SectionBlue";
import { SectionWhite } from "@templates/SectionWhite";
import { SectionPurple } from "@templates/SectionPurple";

import { Card } from "@organisms/Card";
import { Plan } from "@organisms/Plan";
import { Steps } from "@organisms/Steps";
import { Reviews } from "@organisms/Reviews";

import { List } from "@atoms/List";
import { Button } from "@atoms/Button";
import { Poster } from "@atoms/Poster";
import { ListItem } from "@atoms/ListItem";

import styles from '@pages/styles/Landing.module.css';

export const ContextFeatureObserver = createContext();

// I was not given information about the animations, so I implemented them to my taste
// Google PageSpeed Insights test [after build] (100%, 90%, 95%, 92%)
export default function Landing() {
  const buttonTopRef = useRef(null);

  // Behaviour for feature visibility message
  const featureObserver = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const feature = entry.target.dataset.feature;
      const visible = entry.isIntersecting;

      if (visible && feature) {
        console.log(`Feature Shown: ${feature}`);
      }
    });
  });

  // Behaviour for scroll to plan message
  useEffect(() => {
    let counter = 0;
    let callback = () => {
      console.log(`Scroll To Price: ${++counter}`);
    }

    Events.scrollEvent.register('begin', callback);

    return () => {
      Events.scrollEvent.remove('begin', callback);
    };
  }, []);
  
  return (
    <>
      <Header targetToMakeFixed={buttonTopRef}>
        <Button to="plan" size="m">Protect me now</Button>
      </Header>

      <main>
        <ContextFeatureObserver.Provider value={featureObserver}>
          <SectionPurple>
            <h1 className="text_center">Stop your <span className="text_purple">phone from being spied on</span></h1>
            
            <p className={`text_4 text_center ${styles.slogan}`}>Try Clario, a smart anti-spy app that effectively protects your privacy. </p>
            
            <div className={styles.button_top} ref={buttonTopRef}>
              <Button size="l" to="plan">Protect me now</Button>
            </div>

            <List inline gap="s" className={styles.devices}>
              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/apple.svg"
                />
                <p className="text_5 text_bold">iOS</p>
              </ListItem>

              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/desktop.svg"
                />
                <p className="text_5 text_bold">macOS, Windows</p>
              </ListItem>
            </List>

            {
              // Poster background and video background may vary on different displays.
              // I chose such a color that the difference would not be noticeable on smartphones,
              // as they were a priority
              //
              // One of the solutions to this issue could be using a animated svg (for example lottiefiles)
            }
            <Poster color="#483FDD" hasOverlay={false} className={styles.poster}>
              <video width="240" height="272" playsInline loop muted autoPlay>
                <source src="/videos/poster-0.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Poster>

            <p className="text_4 text_bold text_center">
              The anti-spy Clario app can:
            </p>

            <List gap="m" className={styles.features}>
              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/check.svg"
                />
                <p className="text_5">reveal hidden spying apps</p>
              </ListItem>

              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/check.svg"
                />
                <p className="text_5">stop silent location tracking</p>
              </ListItem>

              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/check.svg"
                />
                <p className="text_5">avoid social media hacks</p>
              </ListItem>

              <ListItem gap="s">
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src="/icons/check.svg"
                />
                <p className="text_5">provide 24/7 expert security help</p>
              </ListItem>
            </List>
          </SectionPurple>

          <SectionWhite>
            <h2 className="text_center">Clario helps you easily avoid spying. </h2>

            <Card
              className={styles.card}
              color="#EFF1FF"
              title="Spyware detector"
              description="Find apps secretly spying on you and your data."
              list={[
                {
                  icon: '/icons/identity.svg',
                  text: 'Full background anti-spyware scan',
                },
                {
                  icon: '/icons/alert.svg',
                  text: 'Instant spyware detection alerts',
                },
                {
                  icon: '/icons/network.svg',
                  text: 'Immediate threat quarantining',
                },
              ]}
            >
              <Image
                width={210}
                height={436}
                alt=""
                src="/images/poster-0.png"
                quality={100}
              />
            </Card>

            <Card
              className={styles.card}
              color="#F6EDFA"
              title="Tracker detector"
              description="Discover who tracks your location to spy on you."
              list={[
                {
                  icon: '/icons/spyware.svg',
                  text: 'Stop being secretly tracked',
                },
                {
                  icon: '/icons/location.svg',
                  text: 'Protect your real location',
                },
                {
                  icon: '/icons/safari.svg',
                  text: 'Control who sees your location',
                },
              ]}
            >
              <Image
                width={210}
                height={468}
                alt=""
                src="/images/poster-1.png"
                quality={100}
              />
            </Card>

            <Card
              className={styles.card}
              color="#E6F2FE"
              title="Social media protection"
              description="Easily prevent social media account hacks."
              list={[
                {
                  icon: '/icons/instagram.svg',
                  text: 'See who uses your accounts',
                },
                {
                  icon: '/icons/antivirus.svg',
                  text: 'Revoke access for other users',
                },
                {
                  icon: '/icons/alert.svg',
                  text: 'Get unauthorized login alerts',
                },
              ]}
            >
              <Image
                width={210}
                height={433}
                alt=""
                src="/images/poster-2.png"
                quality={100}
              />
            </Card>

            <Card
              className={styles.card}
              color="#EAF5E4"
              title="Call recorder blocker"
              description="Discover if someone records your calls and chats. "
              list={[
                {
                  icon: '/icons/device.svg',
                  text: 'Hide your call history and records',
                },
                {
                  icon: '/icons/widget.svg',
                  text: 'Revoke sharing your contact list',
                },
                {
                  icon: '/icons/warning.svg',
                  text: 'Help secret texts remain secret',
                },
              ]}
            >
              <Image
                width={210}
                height={436}
                alt=""
                src="/images/poster-3.png"
                quality={100}
              />
            </Card>

            <Card
              className={styles.card}
              color="#EFF1FF"
              title="Screen recording detector"
              description="Don’t let anyone access your phone screen."
              list={[
                {
                  icon: '/icons/incognito.svg',
                  text: 'Find out if your screen is being recorded',
                },
                {
                  icon: '/icons/incognito-stop.svg',
                  text: 'Immediately stop silent recordings',
                },
                {
                  icon: '/icons/alert.svg',
                  text: 'Get alerts if your camera is in use',
                },
              ]}
            >
              <Image
                width={210}
                height={436}
                alt=""
                src="/images/poster-4.png"
                quality={100}
              />
            </Card>
          </SectionWhite>
          
          <SectionWhite>
            <h2 className={`text_center ${styles.heading_shorter}`}>All you need to do is <span className="text_aqua">3 easy steps</span>.</h2>

            <Steps
              className={styles.accordion}
              items={[
                {
                  summary: 'Install Clario',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget turpis nec lacus interdum bibendum. Praesent ultricies libero arcu, vitae interdum ligula pharetra scelerisque.',
                },
                {
                  summary: 'Set up your protection',
                  content: 'Nam quis sem vel libero mollis scelerisque quis eget nulla. Etiam rhoncus nulla ut neque accumsan porttitor.',
                },
                {
                  summary: 'Enjoy spy-free life',
                  content: 'Relax and let Clario do the job.',
                }
              ]}
            />
          </SectionWhite>

          <SectionBlue id="plan">
            <h2 className="text_center">Start your spy-free week for as low as</h2>

            <Plan
              className={styles.plan}
              plan={{
                price: 3.99,
                period: '7 days',
                currency: '$',
              }}
              offer={{
                price: 2.99,
                period: '7 days',
                currency: '$',
                duration: 1800, // This value comes from server (difference of dates)
              }}
            />
          </SectionBlue>

          <SectionWhite>
            <h2 className="text_center">Let’s hear what real Clario users say.</h2>

            <Reviews
              className={styles.reviews}
              items={[
                {
                  color: '#3D317C',
                  shade: '#EFF1FF',
                  company: '/images/client-trustpilot.svg',
                  content: 'It is a great application to protect yourself from hackers.',
                  client: 'Manweet',
                },
                {
                  color: '#3D317C',
                  shade: '#EFF1FF',
                  company: '/images/client-trustpilot.svg',
                  content: 'Great service! They were an amazing help with making sure my device is secure.',
                  client: 'Megan_N',
                },
                {
                  color: '#305938',
                  shade: '#EAF5E4',
                  company: '/images/client-google-play.svg',
                  content: 'The best app you could find!\nI had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.',
                  client: 'Shahu Sardar',
                },
                {
                  color: '#1D367C',
                  shade: '#E6F2FE',
                  company: '/images/client-app-store.svg',
                  content: 'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
                  client: 'Zagkri',
                },
              ]}
            />
          </SectionWhite>
              
          <SectionWhite>
            <div className="text_0 text_center">Stop your <span className="text_purple">phone from being spied on</span></div>

            <div className={styles.button_bottom}>
              <Button size="l" to="plan">Protect me now</Button>
            </div>
          </SectionWhite>
        </ContextFeatureObserver.Provider>
      </main>

      <Footer />
    </>
  );
}
