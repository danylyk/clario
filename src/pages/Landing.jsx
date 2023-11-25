"use client";

import { Review } from "@atoms/Review";
import { Plan } from "@molecules/Plan";
import { Reviews } from "@molecules/Reviews";

export function Landing() {
  // const data = [
  //   {
  //     summary: 'Install Clario',
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget turpis nec lacus interdum bibendum. Praesent ultricies libero arcu, vitae interdum ligula pharetra scelerisque.',
  //   },
  //   {
  //     summary: 'Set up your protection',
  //     content: 'Nam quis sem vel libero mollis scelerisque quis eget nulla. Etiam rhoncus nulla ut neque accumsan porttitor.',
  //   },
  //   {
  //     summary: 'Enjoy spy-free life',
  //     content: 'Relax and let Clario do the job.',
  //   }
  // ];

  const data = [
    {
      id: 0,
      color: '#3D317C',
      shade: '#EFF1FF',
      company: '/images/client-trustpilot.svg',
      content: 'It is a great application to protect yourself from hackers.',
      client: 'Manweet',
    },
    {
      id: 1,
      color: '#3D317C',
      shade: '#EFF1FF',
      company: '/images/client-trustpilot.svg',
      content: 'Great service! They were an amazing help with making sure my device is secure.',
      client: 'Megan_N',
    },
    {
      id: 2,
      color: '#305938',
      shade: '#EAF5E4',
      company: '/images/client-google-play.svg',
      content: 'The best app you could find!\nI had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.',
      client: 'Shahu Sardar',
    },
    {
      id: 3,
      color: '#1D367C',
      shade: '#E6F2FE',
      company: '/images/client-app-store.svg',
      content: 'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
      client: 'Zagkri',
    },
  ];
  
  return (
    <main style={{padding: 50, background: '#483FDD'}}>
      <Plan />
    </main>
  );
}
