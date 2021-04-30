import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    exportable: false,
    loading: true,
    toggleExport: () =>
        set(async (state) => {
            set({ loading: true });
            const { data } = await axios.post('/api/parameter/saveBulk', { exportable: !state.exportable });
            set({ exportable: data.exportable, loading: false });
        }),
    fetchData: async (url) => {
        set({ loading: true });
        const { data } = await axios.get(url);
        set({ exportable: data.exportable, loading: false });
    },
}));

export default useStore;
