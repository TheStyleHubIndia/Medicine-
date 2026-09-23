import { t as supabase } from "./client-B4towMDa.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as useAuth } from "./router-DbBUrYCp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-user-data-DeJGuI7f.js
function useFavorites() {
	const { user } = useAuth();
	const qc = useQueryClient();
	const list = useQuery({
		queryKey: ["favorites", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("user_favorites").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const toggle = useMutation({
		mutationFn: async (item) => {
			if (!user) throw new Error("Sign in to save favourites.");
			const existing = (list.data ?? []).find((f) => f.item_type === item.item_type && f.item_id === item.item_id);
			if (existing) {
				const { error } = await supabase.from("user_favorites").delete().eq("id", existing.id);
				if (error) throw error;
				return "removed";
			}
			const { error } = await supabase.from("user_favorites").insert({
				...item,
				user_id: user.id
			});
			if (error) throw error;
			return "added";
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["favorites"] })
	});
	const isFavorite = (type, id) => (list.data ?? []).some((f) => f.item_type === type && f.item_id === id);
	return {
		favorites: list.data ?? [],
		isLoading: list.isLoading,
		toggle,
		isFavorite
	};
}
function useRecentlyViewed() {
	const { user } = useAuth();
	return useQuery({
		queryKey: ["recent", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("recently_viewed").select("*").order("viewed_at", { ascending: false }).limit(12);
			if (error) throw error;
			return data ?? [];
		}
	});
}
function useTrackView() {
	const { user } = useAuth();
	const qc = useQueryClient();
	return async (item_type, item_id, label) => {
		if (!user) return;
		await supabase.from("recently_viewed").upsert({
			user_id: user.id,
			item_type,
			item_id,
			label,
			viewed_at: (/* @__PURE__ */ new Date()).toISOString()
		}, { onConflict: "user_id,item_type,item_id" });
		qc.invalidateQueries({ queryKey: ["recent"] });
	};
}
function useLearningProgress() {
	const { user } = useAuth();
	return useQuery({
		queryKey: ["progress", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("learning_progress").select("*").order("completed_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
}
function useRecordProgress() {
	const { user } = useAuth();
	const qc = useQueryClient();
	return useMutation({
		mutationFn: async (row) => {
			if (!user) return null;
			const { error } = await supabase.from("learning_progress").insert({
				...row,
				user_id: user.id
			});
			if (error) throw error;
			return true;
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["progress"] })
	});
}
/** Simple, upgradeable spaced-repetition schedule. */
function useReviewSchedule() {
	const { user } = useAuth();
	const qc = useQueryClient();
	const due = useQuery({
		queryKey: ["reviews", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const { data, error } = await supabase.from("review_schedule").select("*");
			if (error) throw error;
			return data ?? [];
		}
	});
	const record = useMutation({
		mutationFn: async ({ flashcardId, outcome }) => {
			if (!user) return null;
			const existing = (due.data ?? []).find((r) => r.flashcard_id === flashcardId);
			const prevInterval = existing?.interval_days ?? 1;
			const interval = outcome === "know" ? Math.min(prevInterval * 2, 30) : outcome === "review" ? 2 : 1;
			const next = /* @__PURE__ */ new Date();
			next.setDate(next.getDate() + interval);
			const payload = {
				user_id: user.id,
				flashcard_id: flashcardId,
				last_reviewed: (/* @__PURE__ */ new Date()).toISOString(),
				review_count: (existing?.review_count ?? 0) + 1,
				correct_count: (existing?.correct_count ?? 0) + (outcome === "know" ? 1 : 0),
				incorrect_count: (existing?.incorrect_count ?? 0) + (outcome === "dont-know" ? 1 : 0),
				difficulty: outcome === "know" ? "easy" : outcome === "review" ? "medium" : "hard",
				interval_days: interval,
				next_review: next.toISOString().slice(0, 10)
			};
			const { error } = await supabase.from("review_schedule").upsert(payload, { onConflict: "user_id,flashcard_id" });
			if (error) throw error;
			return true;
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews"] })
	});
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const dueToday = (due.data ?? []).filter((r) => r.next_review <= today);
	return {
		schedule: due.data ?? [],
		dueToday,
		record
	};
}
//#endregion
export { useReviewSchedule as a, useRecordProgress as i, useLearningProgress as n, useTrackView as o, useRecentlyViewed as r, useFavorites as t };
