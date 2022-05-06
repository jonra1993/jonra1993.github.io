import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import useMounted from 'src/hooks/useMounted';
import gtm from 'src/lib/gtm';
import { resumeApi } from 'src/__fakeApi__/resumeApi';
import {
  Hero,
  About,
  Testimonials,
  Portfolio,
  Footer,
  Resume
} from 'src/components/landingPage';

const Home: FC = () => {
  const mounted = useMounted();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getConnections = useCallback(async () => {
    const data = await resumeApi.getResume();

    if (mounted.current) {
      setResumeData(data);
    }
  }, [mounted]);

  useEffect(() => {
    getConnections();
  }, [getConnections]);

  return (
    <>
      <Helmet>
        <title>Jonathan Vargas</title>
      </Helmet>
      <div>
        {resumeData && <Hero data={resumeData.main} />}
        {resumeData && <About data={resumeData.main} />}
        {resumeData && <Testimonials data={resumeData.testimonials} />}
        {resumeData && <Resume data={resumeData.resume} />}
        {
          // resumeData && <Portfolio data={resumeData.portfolio} />
        }
        {resumeData && <Footer data={resumeData.main} />}
      </div>
    </>
  );
};

export default Home;
