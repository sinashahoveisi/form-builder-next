import type {NextPage} from 'next';
import useFetch from '@/hooks/useFetch';
import FormBuilder from '@/container/FormBuilder';

const Home: NextPage = () => {
  const fetchUi = useFetch({
    name: 'ui',
    url: '36de3336-1c8d-41a5-83b3-7d0f4f5ea4fc',
    enabled: true
  });

  if (fetchUi?.isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <span className="loading loading-ring loading-md" />
      </div>
    );

  return (
    <section className="rtl mt-10 flex items-center justify-center space-y-10">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display">
          <div className="phone-1 artboard artboard-demo">
            <form
              className="m-auto flex flex-col overflow-auto"
              style={{width: fetchUi?.data?.width, height: fetchUi?.data?.height}}>
              <FormBuilder components={fetchUi?.data?.ui} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
